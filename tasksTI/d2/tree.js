const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// console.log(getTreeValues(tree)); // => [1, 2, 3, 4, 5, 6, 7]

function getTreeValues(tree) {
  let res = [tree.value];

  if (Array.isArray(tree.children )) {
    tree.children.forEach(el => {
      res = [...res, ...getTreeValues(el)]
    })
  }

  return res;
}
