module V1
  class SerializableProduct < JSONAPI::Serializable::Resource
    type 'products'

    attributes :name, :slug
  end
end
