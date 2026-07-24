
import { FriendInterface, NewFriend } from "../interface/friend";
import { supabase } from "./supabase";

export const friendService = {

  async search(name: string): Promise<FriendInterface[]> {
  const { data, error } = await supabase
    .from('friends')
    .select('*')
    .ilike('name', `%${name}%`) 
    .order('birthday', { ascending: true });

  if (error) throw error;
  return data;
},
    
  async getAll(): Promise<FriendInterface[]> {
    const { data, error } = await supabase
      .from('friends')
      .select('*')
      .order('birthday', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<FriendInterface | null> {
    const { data, error } = await supabase
      .from('friends')
      .select('*')
      .eq('id', id) // where
      .single(); // devolver objeto sin  array

    if (error) throw error;
    return data;
  },

  async create(friend: NewFriend): Promise<FriendInterface> {
    const { data, error } = await supabase
      .from('friends')
      .insert(friend)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, friend: Partial<NewFriend>): Promise<FriendInterface> {
    const { data, error } = await supabase
      .from('friends')
      .update(friend)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async remove(id: string): Promise<void> {
    const { error } = await supabase
      .from('friends')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};