import {BLACK, RED} from '../color/index.js';
import {rotate_left, rotate_right} from '../rotate/index.js';
import {sibling} from '../family/sibling.js';

import {delete_case6} from './delete_case6.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - at least one of n's sibling's children is red
 *
 * @param {Node} n - The input node.
 */
export const delete_case5 = (n) => {
	const s = sibling(n);

	// The following statements just force the red n's sibling child to be on
	// the left of the left of the parent, or right of the right, so case 6
	// will rotate correctly.

	/**
	 *           ?                       ?
	 *         /   \                  /     \
	 *      >B       B              >B        B
	 *      / \     / \     -->     / \      / \
	 *     -   -  R     B          -   -   =     R
	 *           / \   / \                      / \
	 *          =   = -   -                    =   B
	 *                                            / \
	 *                                           -   -
	 */
	if (n === n.parent.left && s.right.color === BLACK) {
		s.color = RED;
		s.left.color = BLACK;
		rotate_right(s);
	} else if (n === n.parent.right && s.left.color === BLACK) {
		/**
		 *           ?                       ?
		 *         /   \                  /     \
		 *       B      >B               B       >B
		 *      / \     / \     -->     / \      / \
		 *    B     R  -   -          R     =   -   -
		 *   / \   / \               / \
		 *  -   - =   =             B   =
		 *                         / \
		 *                        -   -
		 */
		s.color = RED;
		s.right.color = BLACK;
		rotate_left(s);
	}

	delete_case6(n);
};
