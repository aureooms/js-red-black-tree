/**
 * Computes the grandparent (parent of parent) of the input node.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const grandparent = (node) => {
	// Assert((node !== null) && (node.parent !== null));
	// We only call this function when node HAS a grandparent
	return node.parent.parent;
};
