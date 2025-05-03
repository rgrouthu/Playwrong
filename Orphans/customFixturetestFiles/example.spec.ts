import { expect } from '@playwright/test';
import { test } from '../../fixtures/basic-fixture'


test('uses shared fixture', async ({ fakeUser }) => {
    console.log(fakeUser);
    expect(fakeUser.name).toBe('Alic1e')
})



