
import { Friend, NewFriend } from "../interface/friend";
import { supabase } from "./supabase";

export const friendService = {

    
  async getAll(): Promise<Friend[]> {
    const { data, error } = await supabase
      .from('friends')
      .select('*')
      .order('birthday', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<Friend | null> {
    const { data, error } = await supabase
      .from('friends')
      .select('*')
      .eq('id', id) // where
      .single(); // devolver objeto sin  array

    if (error) throw error;
    return data;
  },

  async create(friend: NewFriend): Promise<Friend> {
    const { data, error } = await supabase
      .from('friends')
      .insert(friend)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, friend: Partial<NewFriend>): Promise<Friend> {
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