// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Eric'
//   lastName: 'Elliott'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Brendan',
  'lastName': 'Eich',
  'location': 'Mountain View',
  'children': [
  {
    'firstName': 'Mocha',
    'lastName': '',
    'location': 'Mountain View',
    'children': [
    {
      'firstName': 'LiveScript',
      'lastName': '',
      'location': 'Mountain View',
      'children': [
      {
        'firstName': 'JavaScript',
        'lastName': '',
        'location': 'Mountain View',
        'children': []
      }]
    }]
  }]
};

const livesInMountainView = function(familyMember) {
  return familyMember.location === 'Mountain View';
};
//
// filterFamilyMembers(familyTree, livesInMountainView)
// returns ['Brendan Eich', 'Mocha', 'LiveScript', 'JavaScript'];

const filterFamilyMembers = (familyTree, filter) => {
  const results = [];
  (function searchFamilyTree(descendant) {
    if (filter(descendant)) {
      results.push(descendant.firstName + ' ' + descendant.lastName);
    }
    for (let child of descendant.children) {
      searchFamilyTree(child);
    }
  })(familyTree, livesInMountainView);
  
  return results;
};

filterFamilyMembers(familyTree, livesInMountainView);
