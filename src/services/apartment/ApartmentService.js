import axiosClient, { handleRequest} from "../../utils/AxiosClient";

export async function getAllApartments(pageNumber = 1, pageSize = 10) {
    return handleRequest({
      // loadingMessage: 'Loading apartments...',
      // successMessage: 'Apartments loaded successfully!',
      errorMessage: 'Failed to load apartments.',
      request: () => axiosClient.get(`/Apartment/all-apartments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        params: {
          pageNumber,
          pageSize,
        },
      }),
    });
  }


export async function getSavedApartments(pageNumber = 1, pageSize = 10) {
    return handleRequest({
      // loadingMessage: 'Loading saved apartments...',
      // successMessage: 'Saved apartments loaded successfully!',
      errorMessage: 'Failed to load saved apartments.',
      request: () => axiosClient.get('/Apartment/saved', {
        params: {
          pageNumber,
          pageSize,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
      }),
    });
}
  export async function getAllProperties() {
    return handleRequest({
      // loadingMessage: 'Loading properties...',
      // successMessage: 'Property-listing loaded successfully',
      errorMessage: 'Faild to load properties',
      request: () => axiosClient.get('/Apartment/all-properties-by-user',{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      })
    });
  }
 
  export async function createApartmentListing(apartmentData){
    return handleRequest({
      loadingMessage: 'Creating apartment...',
      successMessage: 'Apartment created successfully',
      errorMessage: 'Failed to create apartment',
      request: () => axiosClient.post(`/Apartment/Create`, 
        apartmentData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        }
      )
    });
}

export async function getApartmentsByid(apartmentid){
  return handleRequest({
    request: () => axiosClient.get(`/Apartment/apartment-by-id/${apartmentid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })
  });
}

export async function addToSaved(apartmentId){
  return handleRequest({
    loadingMessage: 'Saving apartment to wishlist...',
    successMessage: 'Apartment saved successfully',
    errorMessage: 'Failed to save apartment',
    request: () => axiosClient.post(
      `/Apartment/save-apartment/${apartmentId}`, 
      {}, // empty body or data object
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
  });  
}



  
  

