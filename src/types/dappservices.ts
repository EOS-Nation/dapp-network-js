export interface Accountext {
  id: number;
  account: string;
  service: string;
  provider: string;
  quota: string;
  balance: string;
  last_usage: string;
  last_reward: string;
  package: string;
  pending_package: string;
  package_started: string;
  package_end: string;
}

export interface Package {
  id: number;
  api_endpoint: string;
  package_json_uri: string;
  package_id: string;
  service: string;
  provider: string;
  quota: string;
  package_period: number;
  min_stake_quantity: string;
  min_unstake_period: number;
  enabled: number;
}
