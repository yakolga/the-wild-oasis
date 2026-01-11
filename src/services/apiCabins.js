import supabase from "./supabase";

export async function getCabins() {
    const { data: cabins, error } = await supabase.from('cabins').select('*')

    if (error) {
        console.error(error);
        throw new Error('Could not fetch cabins');
    }

    return cabins;
}

export async function deleteCabin(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('Cabin could not be deleted');
    }
}