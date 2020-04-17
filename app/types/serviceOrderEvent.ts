import IProduct from './product';
import IServiceAppointment from './serviceAppointment';
import IServiceOrderEventStatusUpdate from './serviceOrderEventStatusUpdate';

export default interface IServiceOrderEvent {
  readonly appointment: IServiceAppointment;
  readonly contactPhoneNumber: (string | null);
  readonly createdAt: string;
  readonly products: IProduct[];
  readonly serviceOrderEventStatusUpdates: IServiceOrderEventStatusUpdate[];
  readonly serviceOrderId: (string | null);
  readonly status: string;
}
