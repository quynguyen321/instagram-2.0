import React, { useEffect } from 'react'
import faker from 'faker'

function Stories() {


useEffect (() => {
   const suggestion = [...Array(20)].map((_, i) => ({
       ...faker.helpers.contextualCard(),
       id: i,
   }));

   console.log(suggestion);
}, [] )

  return (
    <div>
    // stories
    </div>
  )
}

export default Stories