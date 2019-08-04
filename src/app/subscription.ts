import { Account } from './account';

export interface Subscription {

	subscriptionId: string;
	accounts: Account[];
	isValid: boolean;
}
