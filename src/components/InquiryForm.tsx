import React, { useState } from 'react';

type TripType = 'One-Way Drop' | 'Round Trip' | null;

interface FormData {
  tripType: TripType;
  destination: string;
  phoneNumber: string;
}

export const InquiryForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    tripType: null,
    destination: '',
    phoneNumber: '',
  });

  const handleTripTypeSelect = (type: TripType) => {
    setFormData((prev) => ({ ...prev, tripType: type }));
    setStep(2);
  };

  const handleDestinationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.destination.trim()) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phone validation and submit logic here
    console.log('Form Submitted: ', formData);
    alert('Quote requested successfully!');
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div
          className="bg-blue-600 h-2 transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {step === 1 && "What's your trip type?"}
          {step === 2 && "Where are you heading?"}
          {step === 3 && "Where should we send your quote?"}
        </h3>
        <p className="text-sm text-gray-500 mb-6">Step {step} of 3</p>

        {/* Step 1: Trip Type */}
        {step === 1 && (
          <div className="space-y-4">
            <button
              onClick={() => handleTripTypeSelect('One-Way Drop')}
              className="w-full py-3 px-4 border-2 rounded-lg text-left transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium text-gray-700"
            >
              One-Way Drop
            </button>
            <button
              onClick={() => handleTripTypeSelect('Round Trip')}
              className="w-full py-3 px-4 border-2 rounded-lg text-left transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium text-gray-700"
            >
              Round Trip
            </button>
          </div>
        )}

        {/* Step 2: Destination */}
        {step === 2 && (
          <form onSubmit={handleDestinationSubmit} className="space-y-4">
            <div>
              <label htmlFor="destination" className="sr-only">Destination</label>
              <input
                id="destination"
                type="text"
                autoFocus
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="e.g., Wagah Border, Dharamshala, Delhi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-500 hover:text-gray-800 font-medium text-sm"
              >
                &larr; Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Phone Number */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-medium border-r border-gray-300 pr-2 py-2">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                autoFocus
                required
                pattern="[0-9]{10}"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="98765 43210"
                className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-4 gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-gray-500 hover:text-gray-800 font-medium text-sm shrink-0"
              >
                &larr; Back
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Get Instant Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};