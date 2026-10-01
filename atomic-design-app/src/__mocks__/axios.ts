const mockAxios: any = {
  get: jest.fn(),
  create: jest.fn(() => mockAxios),
};

export default mockAxios;