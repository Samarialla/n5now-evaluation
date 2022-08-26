import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { mount } from '../../../ricky-and-morty/src/bootstrap';

export default () => {
   const ref = useRef(null);
   const history = useHistory();

   useEffect(() => {
       const { onParentNavigate } = mount(ref.current)
       history.listen(onParentNavigate)
   }, [])

   return <div ref={ref} />
}