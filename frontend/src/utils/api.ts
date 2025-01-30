const API_URL = 'http://127.0.0.1:8000';

import { UserInfo, UserUpdate } from '@/utils/types';

export async function getUsersList() {
    const response = await fetch(`${API_URL}/users/`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const result = await response.json();
    return result;
}

export async function getUser(user_id: number) {
  const response = await fetch(`${API_URL}/users/${user_id}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch get user');
  }
  const result = await response.json();
  return result;
}

export async function postUser(data: UserInfo) {
  const response = await fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch post user');
  }
  const result = await response.json();
  return result;
}

export async function putUser(user_id: number, data: UserUpdate) {
  const response = await fetch(`${API_URL}/users/${user_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch put user');
  }
  const result = await response.json();
  return result;
}

export async function deleteUser(user_id: number) {
  const response = await fetch(`${API_URL}/users/${user_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch delete user');
  }
  const result = await response.json();
  return result;
}
