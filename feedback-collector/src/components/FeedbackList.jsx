import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import FeedbackCard from './FeedbackCard'
import { FiRefreshCw } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchFeedbacks = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/.netlify/functions/get-feedbacks')
      setFeedbacks(response.data)
    } catch (error) {
      toast.error('Failed to fetch feedbacks. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Submitted Feedbacks</h2>
        <button
          onClick={fetchFeedbacks}
          disabled={loading}
          className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Refreshing...
            </span>
          ) : (
            <span className="flex items-center">
              <FiRefreshCw className="mr-2" />
              Refresh
            </span>
          )}
        </button>
      </div>

      {feedbacks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">No feedbacks submitted yet.</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </motion.div>
      )}
    </div>
  )
}