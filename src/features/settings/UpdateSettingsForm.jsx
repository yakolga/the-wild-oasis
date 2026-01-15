import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Spinner from '../../ui/Spinner';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {isLoading, settings: { maxBookingLength, maxGuestsPerBooking, minBookingLength, breakfastPrice} = {}} = useSettings();

  const {isUpdating, updateSetting} = useUpdateSetting();

  function handleUpdate(e, field) {
    const {value} = e.target;

    if (!value) return;
    updateSetting({[field]: value})
  }

  if (isLoading) return <Spinner/>

  return (
    <Form>
      <FormRow text='Minimum nights/booking'>
        <Input type='number' id='min-nights' disabled={isUpdating} defaultValue={minBookingLength} onBlur={e => handleUpdate(e, "minBookingLength")}/>
      </FormRow>
      <FormRow text='Maximum nights/booking'>
        <Input type='number' id='max-nights' disabled={isUpdating} defaultValue={maxBookingLength}/>
      </FormRow>
      <FormRow text='Maximum guests/booking'>
        <Input type='number' id='max-guests' disabled={isUpdating} defaultValue={maxGuestsPerBooking}/>
      </FormRow>
      <FormRow text='Breakfast price'>
        <Input type='number' id='breakfast-price' disabled={isUpdating} defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
