import PropertyAmenities from "./_steps/Amenities"
import PropertyDescription from "./_steps/Description"
import PropertyInformation from "./_steps/Information"
import PropertyLocation from "./_steps/Location"
import PropertyPhotos from "./_steps/Photos"
import PropertyPrice from "./_steps/Price"
import PropertyReceipt from "./_steps/Receipt"
import PropertyStatus from "./_steps/Status"
import PropertyStructure from "./_steps/Structure"
import PropertyTitle from "./_steps/Title"

interface PropertyObject {
  id: string
  slug: string
  component: React.ComponentType<any>
}

const createPropertyController: PropertyObject[] = [
  {
    id: "structure",
    slug: "structure",
    component: PropertyStructure
  },
  {
    id: "location",
    slug: "location",
    component: PropertyLocation
  },
  {
    id: "status",
    slug: "status",
    component: PropertyStatus
  },
  {
    id: "information",
    slug: "information",
    component: PropertyInformation
  },
  {
    id: "description",
    slug: "description",
    component: PropertyDescription
  },
  {
    id: "photos",
    slug: "photos",
    component: PropertyPhotos
  },
  {
    id: "amenities",
    slug: "amenties",
    component: PropertyAmenities
  },
  {
    id: "title",
    slug: "title",
    component: PropertyTitle
  },
  {
    id: "price",
    slug: "price",
    component: PropertyPrice
  },
  {
    id: "receipt",
    slug: "receipt",
    component: PropertyReceipt
  }
]

function CreateProperty () {
  //URL become-a-host/{propertyID}/{step}
  return (
    <div>

    </div>
  )
}

export default CreateProperty
