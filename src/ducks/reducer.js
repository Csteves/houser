const intialState = {
    listings:[],
    name:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    image:'',
    mortgage:"",
    rent:""
}

//ACTION TYPES
const UPDATE_STEP1 ="STEP1",
      UPDATE_LISTINGS = 'UPDATE_LISTINGS',
      UPDATE_STEP2 = 'UPDATE_STEP2',
      UPDATE_STEP3 = 'UPDATE_STEP3',
      CANCEL = "CANCEL"



//ACTION CREATORS
export function updateStep1(name,address,city,state,zip){
    return {
        type:UPDATE_STEP1,
        payload:{
            name:name,
            address:address,
            city:city,
            state:state,
            zip:zip
        }
    }
}


export function updateListings(listing){
    return{
        type:UPDATE_LISTINGS,
        payload:listing
    }
}
export function updateStep2(image){
    return{
        type:UPDATE_STEP2,
        payload:image
    }
}
export function updateStep3(mortgage,rent){
    return{
        type:UPDATE_STEP3,
        payload:{
            mortgage:mortgage,
            rent:rent
        }
    }
}
export function cancel(){
    return{
        type:CANCEL,
        payload:intialState
    }
}



//REDUCER
export default function reducer(state = intialState, action){
    switch (action.type) {

        case UPDATE_STEP1:
        return {...state, name:action.payload.name,address:action.payload.address,
                          city:action.payload.city, state:action.payload.state, zip:action.payload.zip};

        case UPDATE_STEP2:
        return {...state, image:action.payload};

        case UPDATE_LISTINGS:
        return {...state, listings:[...action.payload]}

        case UPDATE_STEP3:
        return {...state, mortgage:action.payload.mortgage,rent:action.payload.rent};

        case CANCEL:
        return {...action.payload}


        default:return state
    }

}
