function callNameSecondTime() {
  let name;
  console.log(name);
}

function callNameFirstTime() {
  let name = 'Mike';
  callNameSecondTime();
}

const name = 'Olivia';

callNameFirstTime();

//////////////////////

function callNameFirstTime() {
  let name = 'Mike';
  callNameSecondTime();

  function callNameSecondTime() {
    console.log(name);
  }
}

const name = 'Olivia';

callNameFirstTime();
