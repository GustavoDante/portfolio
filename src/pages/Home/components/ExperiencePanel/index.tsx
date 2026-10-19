import { useContext, useState } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { SectionTitle } from '../../styles'
import { translations } from '../../translations/translations'
import { JobBody, JobButton, JobItem, JobsHeading } from './styles'

export function ExperiencePanel() {
  const { language } = useContext(LanguageContext)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const text = translations[language].experiences

  return (
    <>
      <JobsHeading>
        <SectionTitle>{text.heading}</SectionTitle>
      </JobsHeading>
      <div>
        {text.jobs.map((job, index) => {
          const isOpen = openIndex === index
          const bodyId = `job-body-${index}`

          return (
            <JobItem key={`${job.company}-${job.data}`}>
              <JobButton
                type="button"
                aria-expanded={isOpen}
                aria-controls={bodyId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="date">{job.data}</span>
                <span className="title">
                  <span className="role">{job.job}</span>
                  <span className="company">{job.company}</span>
                </span>
                <span className="sign" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </JobButton>
              <JobBody id={bodyId} $open={isOpen} aria-hidden={!isOpen}>
                <div>
                  <p>{job.description}</p>
                </div>
              </JobBody>
            </JobItem>
          )
        })}
      </div>
    </>
  )
}
