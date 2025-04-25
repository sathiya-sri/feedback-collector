import { motion } from 'framer-motion'
import { FiUser, FiMail, FiMessageSquare, FiClock } from 'react-icons/fi'

export default function FeedbackCard({ feedback }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <FiUser className="text-indigo-600 dark:text-indigo-300" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {feedback.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiClock className="mr-1" />
              <span>{new Date(feedback.timestamp).toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
            <FiMail className="mr-1" />
            <span>{feedback.email}</span>
          </div>
          <div className="mt-3 text-gray-700 dark:text-gray-300">
            <div className="flex">
              <FiMessageSquare className="mr-2 mt-0.5 flex-shrink-0 text-indigo-500" />
              <p className="whitespace-pre-line">{feedback.message}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}