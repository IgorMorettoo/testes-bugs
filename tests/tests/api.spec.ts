import { test, expect } from '@playwright/test';

const API_URL = 'http://localhost:8080';

test('should create user successfully', async ({ request }) => {
  const email = `api${Date.now()}@gmail.com`;

  const response = await request.post(`${API_URL}/auth/signup`, {
    data: {
      email,
      password: 'Admin123@',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.email).toBe(email);
});

test('should not create user with duplicated email', async ({ request }) => {
  const email = `duplicado${Date.now()}@gmail.com`;

  await request.post(`${API_URL}/auth/signup`, {
    data: {
      email,
      password: 'Admin123@',
    },
  });

  const response = await request.post(`${API_URL}/auth/signup`, {
    data: {
      email,
      password: 'Admin123@',
    },
  });

  expect(response.status()).toBe(409);

  const body = await response.json();
  expect(body.message).toBe('E-mail já está em uso');
});

test('should login successfully', async ({ request }) => {
  const email = `login${Date.now()}@gmail.com`;

  await request.post(`${API_URL}/auth/signup`, {
    data: {
      email,
      password: 'Admin123@',
    },
  });

  const response = await request.post(`${API_URL}/auth/signin`, {
    data: {
      email,
      password: 'Admin123@',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.email).toBe(email);
});

test('should return invalid credentials', async ({ request }) => {
  const response = await request.post(`${API_URL}/auth/signin`, {
    data: {
      email: `naoexiste${Date.now()}@gmail.com`,
      password: 'Admin123@',
    },
  });

  expect(response.status()).toBe(401);

  const body = await response.json();
  expect(body.message).toBe('Credenciais inválidas');
});