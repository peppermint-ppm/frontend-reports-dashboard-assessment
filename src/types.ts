export interface TestInfo {
  name: string;
  type: string;
  datePublished: string; 
  participants: number;
}

export interface Metrics {
  totalTasks: number;
  taskCompletion: number;
  sus: number;
  nps: number;
  ces: number;
}

export interface DeviceBreakdown {
  name: string;
  count: number;
}

export interface LocationBreakdown {
  country: string;
  lat:string;
  long:string;
  count: number;
}

export interface TestReport {
  testInfo: TestInfo;
  metrics: Metrics;
  deviceBreakdown: DeviceBreakdown[];
  locationBreakdown: LocationBreakdown[];
}