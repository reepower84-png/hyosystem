export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: string;
}

export interface NavItem {
  id: string;
  label: string;
}
