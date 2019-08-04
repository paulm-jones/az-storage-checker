import { Container } from './container';

export interface Account {

	name: string;
	keySource: string;
	containers: Container[]
	isAccessAllowedFromAllNetworks: boolean;
	canAccessAzureServices: boolean;
	ipAccesses: string[];
	isValid: boolean;
	encryptionStatusMap: Map<string,string>
}
