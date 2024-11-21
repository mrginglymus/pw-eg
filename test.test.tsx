import React from 'react';
import {test, expect} from '@playwright/experimental-ct-react';

test('test', async ({mount}) => {
    const component = await mount(<div>Hello</div>);
    await expect(component).toContainText(/hello/i)
})
