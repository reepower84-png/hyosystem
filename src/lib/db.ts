import { supabase } from './supabase';
import { Inquiry } from '@/types';

export async function getInquiries(): Promise<Inquiry[]> {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }

  return (data || []).map(item => ({
    id: item.id,
    name: item.name,
    phone: item.phone,
    message: item.message || '',
    status: item.status,
    createdAt: item.created_at,
  }));
}

export async function addInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> {
  const { data, error } = await supabase
    .from('inquiries')
    .insert([
      {
        name: inquiry.name,
        phone: inquiry.phone,
        message: inquiry.message || '',
        status: 'pending',
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error adding inquiry:', error);
    throw error;
  }

  return {
    id: data.id,
    name: data.name,
    phone: data.phone,
    message: data.message || '',
    status: data.status,
    createdAt: data.created_at,
  };
}

export async function updateInquiryStatus(id: string, status: Inquiry['status']): Promise<Inquiry | null> {
  const { data, error } = await supabase
    .from('inquiries')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating inquiry:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    phone: data.phone,
    message: data.message || '',
    status: data.status,
    createdAt: data.created_at,
  };
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('inquiries')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting inquiry:', error);
    return false;
  }

  return true;
}
