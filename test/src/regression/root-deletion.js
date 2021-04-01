import test from 'ava';

import {increasing} from '../../fixtures.js';
import {empty} from '../../../src/index.js';

test('root + pred', (t) => {
	const tree = empty(increasing);
	t.true(tree.isEmpty());
	tree.add(0);
	t.false(tree.isEmpty());
	tree.add(-1);
	t.false(tree.isEmpty());
	tree.remove(0);
	t.false(tree.isEmpty());
	tree.remove(-1);
	t.true(tree.isEmpty());
});
