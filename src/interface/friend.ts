export interface Friend {
  user_id?: string;
  id: string;
  name: string;
  birthday: string;
  created_at?: string;
}

export type NewFriend = Omit<Friend, 'id' | 'created_at'| 'user_id' >;