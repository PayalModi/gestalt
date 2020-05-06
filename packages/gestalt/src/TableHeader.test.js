// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TableHeader from './TableHeader.js';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <TableHeader>
        <div>row with column names</div>
      </TableHeader>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
