import FeedbackForm from '../components/FeedbackForm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">We Value Your Feedback</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Share your thoughts with us to help improve our services.
        </p>
      </motion.div>
      <FeedbackForm />
    </div>
  )
}