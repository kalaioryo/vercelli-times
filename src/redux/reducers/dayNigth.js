const dayNigthReduder = (state = true, action) => {
  switch(action.type){
    case 'DAYNIGTH' :
      return !state;
    default :
      return state;
  }
}

export default dayNigthReduder;