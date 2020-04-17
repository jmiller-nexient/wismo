import IVerificationEventStatusUpdate from './verificationEventStatusUpdate';

export default interface IVerificationEvent {
  readonly createdAt: string;
  readonly verificationCode: string;
  readonly verificationDescription: string;
  readonly verificationEventStatus: string;
  readonly verificationEventStatusUpdates: IVerificationEventStatusUpdate[];
}
