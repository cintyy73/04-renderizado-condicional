/* eslint-disable react/prop-types */
import Card from './Card'

const ListIfElse = ({dogs}) => {
    if(!dogs){
        return null
    }
     return (
    <div>
      {dogs.map((element) => <Card key={element.id} element={element}/>
      )}
    </div>
  )
}

export default ListIfElse
