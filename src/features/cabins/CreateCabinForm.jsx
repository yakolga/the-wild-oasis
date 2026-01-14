import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({cabinToEdit = {}}) {
  const {id: editId, ...editValue} = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValue : {}
  });
  const {errors} = formState;
  const queryClient = useQueryClient();
  const {mutate: createCabin, isLoading: isCreating} = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({queryKey: ["cabin"]});
      reset();
    },
    onError: (err) => toast.error(err.message)
  });

  const {mutate: editCabin, isLoading: isEditing} = useMutation({
    mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({queryKey: ["cabin"]});
      reset();
    },
    onError: (err) => toast.error(err.message)
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession) editCabin({newCabinData: {...data, image}, id: editId});
    else mutate({...data, image: data.image[0]});
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow text={"Cabin name"} error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name", {
          required: "This field is required"
        })} disabled={isWorking}/>
      </FormRow>

      <FormRow text={"Maximum capacity"} error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Capacity should be at least 1"
          }
        })} disabled={isWorking}/>
      </FormRow>

      <FormRow text={"Regular price"} error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Capacity should be at least 1"
          }
        })} disabled={isWorking}/>
      </FormRow>

      <FormRow text={"Discount"} error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
          required: "This field is required",
          validate: (value) => value <= getValues().regularPrice || 'Discount should be less than a regular price'
        })} disabled={isWorking}/>
      </FormRow>

      <FormRow text={"Description for website"} error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register("description", {
          required: "This field is required"
        })} disabled={isWorking}/>
      </FormRow>

      <FormRow text={"Cabin photo"} error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" {...register("image", {
          required: isEditSession ? false : "This field is required"
        })}/>
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
