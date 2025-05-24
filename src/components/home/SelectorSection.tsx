// src/components/SelectorSection.tsx

// Import React
import React from "react";
// Import RadioGroup from Headless UI for the selector buttons
import { RadioGroup } from "@headlessui/react";
// Import CheckCircleIcon for indicating the selected option
import { CheckCircleIcon } from "@heroicons/react/20/solid";

// Define the type for a cohort item
export type CohortItem = {
  id: number;
  title: string;
  description: string;
  URL: string;
  soldout: boolean;
  oneSpotLeft: boolean;
};

// Define props for the SelectorSection component
type SelectorSectionProps = {
  cohorts: CohortItem[];
  bookingOptions: { [key: number]: { label: string; link: string } };
  selectedCohort: CohortItem;
  setSelectedCohort: (cohort: CohortItem) => void;
};

/**
 * SelectorSection component renders a RadioGroup for cohort selection and a booking button.
 * All Tailwind CSS styles and layout match the original parent component.
 */
const SelectorSection: React.FC<SelectorSectionProps> = ({
  cohorts,
  bookingOptions,
  selectedCohort,
  setSelectedCohort,
}) => {
  // Determine if the booking button should be disabled.
  const isButtonDisabled =
    cohorts.every((cohort) => cohort.soldout) || selectedCohort.soldout;

  return (
    <div>
      <div className="mt-8">
        {/* RadioGroup for selecting cohorts */}
        <RadioGroup
          value={selectedCohort}
          onChange={setSelectedCohort}
          className="flex flex-col md:flex-row gap-4 w-full"
        >
          {cohorts.map((cohort, index) => (
            <RadioGroup.Option
              key={cohort.id}
              value={cohort}
              disabled={cohort.soldout}
              className={({ checked }) =>
                `w-full h-20 relative flex items-center cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-xs focus:outline-none ${
                  checked ? "border-gray-700 ring-2 ring-gray-700" : ""
                } ${cohort.soldout ? "opacity-50 cursor-not-allowed" : ""}`
              }
            >
              {({ checked }) => (
                <>
                  <span className="flex flex-1 flex-col">
                    <span className="block text-sm font-medium text-gray-900">
                      {cohort.title}
                      {/* Sold Out Badge */}
                      {cohort.soldout && (
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                          <svg
                            className="w-5 h-3 fill-red-500"
                            viewBox="0 0 6 6"
                            aria-hidden="true"
                          >
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                          Sold Out
                        </span>
                      )}
                      {/* One Spot Left Badge */}
                      {!cohort.soldout && cohort.oneSpotLeft && (
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-2 text-xs font-medium text-yellow-700">
                          <svg
                            className="w-5 h-3 fill-yellow-500"
                            viewBox="0 0 6 6"
                            aria-hidden="true"
                          >
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                          One Spot Left
                        </span>
                      )}
                    </span>
                    <span className="-mt-0.5 text-sm text-gray-500">
                      {cohort.description}
                    </span>
                  </span>
                  {/* Check icon for selected option */}
                  {checked && (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-7 text-gray-700 transition-opacity duration-200"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent ${
                      checked ? "border-indigo-600" : ""
                    }`}
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      {/* Booking button */}
      <div className="mt-8">
        <a
          href={bookingOptions[selectedCohort.id].link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full px-4 py-2 bg-yellow-300 text-gray-700 rounded transition-colors ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-500"
          }`}
          onClick={(e) => {
            if (isButtonDisabled) e.preventDefault();
          }}
        >
          {bookingOptions[selectedCohort.id].label}
        </a>
      </div>
    </div>
  );
};

export default SelectorSection;
