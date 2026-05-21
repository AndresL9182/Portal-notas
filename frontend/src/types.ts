export interface Room {
  id: number;
  name: string;
  type: string;
  capacity: number;
  location: string;
  status: "Libre" | "Ocupado" | "Reservado";
  currentActivity?: string;
  nextFreeTime?: string;
}

export interface SupportTicket {
  id: string;
  category: string;
  priority: string;
  subject: string;
  description: string;
  status: string;
  createdAt: string;
}