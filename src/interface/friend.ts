export interface FriendInterface {
  user_id?: string;
  id: string;
  name: string;
  birthday: string;
  image?: string; 
  created_at?: string;
}

export type NewFriend = Omit<FriendInterface, 'id' | 'created_at'| 'user_id' >;