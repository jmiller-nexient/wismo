import IServiceAppointmentWindow from './serviceAppointmentWindow';

export default interface IServiceAppointment {
  readonly appointmentWindow: IServiceAppointmentWindow;
  readonly date: string;
}
