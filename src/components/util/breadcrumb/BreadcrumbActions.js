import { Type } from "../../../redux/types"
import store from '../../../redux/store';

export const setBreadcrumb = (breadcrumb) => dispatch => {
    let {breadcrumbs} = store.getState().breadcrumbs;
    console.log('breadcrumbs', breadcrumbs)

    let existingCrumb = breadcrumbs.find(crumb => crumb.label === breadcrumb.label);
    console.log('existingCrumb', existingCrumb)
    let newCrumbs;

    let index;
    if (existingCrumb) {
        for(let i=0; i < breadcrumbs.length; i++) {
            if(breadcrumbs[i].label == existingCrumb.label) {
                index = i;
                break;
            }
        }

        console.log('index', index)
        breadcrumbs = breadcrumbs.slice(0, index+1);
        // let newCrumbs = breadcrumbs.filter(bc => bc.label !== existingCrumb.label);
        // breadcrumbs = newCrumbs;
        // console.log('breadcrumbs', breadcrumbs)
        // newCrumbs = state.breadcrumbs.slice(0, )
    } else {
        breadcrumbs.push(breadcrumb);
    }
    dispatch({
        type: Type.SET_BREADCRUMBS,
        payload: breadcrumbs
    })

    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
}

export const restoreBreadcrumbs = () => dispatch => {
    const breadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs'));

    dispatch({
        type: Type.SET_BREADCRUMBS,
        payload: breadcrumbs
    })
}

export const removeBreadcrumb = (breadcrumb) => dispatch => {
    dispatch({
        type: Type.REMOVE_BREADCRUMB,
        payload: breadcrumb
    })
}