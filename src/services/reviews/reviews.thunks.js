import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./reviews.service"

export const findReviewThunk = createAsyncThunk(
  'reviews/findReview', async (rid) =>
    await service.findReview(rid)
)

export const deleteReview = createAsyncThunk(
    'reviews/deleteGig',
    async (rid) => {
      await service.deleteReview(rid)
      return rid
  })
  

  export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (review) => {
      const newReview = await service.createReview(review)
      return newReview
  })
  
 

