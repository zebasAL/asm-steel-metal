import { NextApiRequest, NextApiResponse } from 'next';
import isrHandler from './isrHandler';
import { StaticProduct } from '~/firebase/products/isr';

describe('isrHandler', () => {

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  test('GET', async () => {
    process.env.ADMIN_FIREBASE_PRIVATE_KEY = '/new-prefix/';

    const req = {} as NextApiRequest;
    const res = {
      status: jest.fn().mockReturnThis() as NextApiResponse['status'],
      json: jest.fn() as NextApiResponse['json'],
    } as NextApiResponse;

    await isrHandler(req, res);

    console.log("res", res)

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ success: true, data: expect.any(Array<StaticProduct> || []) });
  });

  test('POST', async () => {
    const req = {
      method: 'POST',
      body: [{ /* your sample data */ }],
    } as NextApiRequest;
    const res = {
      status: jest.fn().mockReturnThis() as NextApiResponse['status'],
      json: jest.fn() as NextApiResponse['json'],
    } as NextApiResponse;

    await isrHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('Method Not Allowed', async () => {
    const req = {
      method: 'INVALID_METHOD',
    } as NextApiRequest;
    const res = {
      status: jest.fn().mockReturnThis() as NextApiResponse['status'],
      json: jest.fn() as NextApiResponse['json'],
    } as NextApiResponse;

    await isrHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ sucess: false, message: 'Method Not Allowed' });
  });

});