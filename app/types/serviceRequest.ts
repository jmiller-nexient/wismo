import IAddress from './address';
import IProduct from './product';
import IServiceOrderEvent from './serviceOrderEvent';
import IServiceRequestStatusUpdate from './serviceRequestStatusUpdate';
import IVerificationEvent from './verificationEvent';

export default interface IServiceRequest {
  readonly accountNumber: string;
  readonly address: IAddress;
  readonly advisements: (string | null)[];
  readonly serviceRequestStatusUpdates: IServiceRequestStatusUpdate[];
  readonly premiseId: string;
  readonly products: IProduct[];
  readonly serviceOrderEvents: IServiceOrderEvent[];
  readonly serviceRequestType: string;
  readonly verificationEvents: IVerificationEvent[];
  readonly wantDate: (string | null);
}
