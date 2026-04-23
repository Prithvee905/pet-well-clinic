import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { PawPrint, CheckCircle, Send } from 'lucide-react';
import FormInput from '@/components/ui/FormInput';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

const petTypes = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' },
  { value: 'rabbit', label: 'Rabbit' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'other', label: 'Other' },
];

const serviceOptions = services.map((s) => ({
  value: s.id,
  label: s.title,
}));

const timeSlots = [
  { value: '9:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
];

import { supabase } from '@/lib/supabase';

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setError(null);
    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized. Check your .env file.');
      }

      const { error: supabaseError } = await supabase
        .from('appointments')
        .insert([
          {
            owner_name: data.ownerName,
            phone: data.phone,
            email: data.email,
            pet_name: data.petName,
            pet_type: data.petType,
            pet_age: data.petAge,
            service: data.service,
            preferred_date: data.preferredDate,
            preferred_time: data.preferredTime,
            notes: data.notes,
            status: 'pending',
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to request appointment. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment – Petwell Clinic</title>
        <meta
          name="description"
          content="Schedule a visit at Petwell Clinic. Book your pet's vaccination, checkup, grooming, or emergency care appointment online."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <PawPrint className="absolute top-[20%] right-[10%] w-10 h-10 text-white/[0.05] rotate-12" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book an Appointment
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Schedule a visit for your pet — it only takes a minute.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-border-soft shadow-xl"
          >
            {submitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-text-dark mb-3">
                  Appointment Requested!
                </h2>
                <p className="text-text-muted max-w-md mx-auto mb-6">
                  Thank you for booking with Petwell Clinic. We'll confirm your
                  appointment via phone or WhatsApp shortly.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Book Another Visit
                </Button>
              </motion.div>
            ) : (
              /* Form */
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text-dark mb-2">
                    Schedule Your Visit
                  </h2>
                  <p className="text-sm text-text-muted">
                    Fill in the details below and we'll get back to you to
                    confirm your appointment time.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                      {error}
                    </div>
                  )}
                  {/* Owner Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                      label="Owner Name"
                      name="ownerName"
                      placeholder="Your full name"
                      error={errors.ownerName?.message}
                      {...register('ownerName', {
                        required: 'Name is required',
                      })}
                    />
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      error={errors.phone?.message}
                      {...register('phone', {
                        required: 'Phone is required',
                      })}
                    />
                  </div>

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    error={errors.email?.message}
                    {...register('email', {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />

                  {/* Pet Info */}
                  <div className="pt-2 border-t border-border-soft">
                    <p className="text-sm font-semibold text-text-dark mb-4 flex items-center gap-2">
                      <PawPrint className="w-4 h-4 text-primary" /> Pet
                      Information
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <FormInput
                      label="Pet Name"
                      name="petName"
                      placeholder="Your pet's name"
                      error={errors.petName?.message}
                      {...register('petName', {
                        required: 'Pet name is required',
                      })}
                    />
                    <FormInput
                      label="Pet Type"
                      name="petType"
                      type="select"
                      placeholder="Select type"
                      options={petTypes}
                      error={errors.petType?.message}
                      {...register('petType', {
                        required: 'Pet type is required',
                      })}
                    />
                    <FormInput
                      label="Pet Age"
                      name="petAge"
                      placeholder="e.g., 2 years"
                      {...register('petAge')}
                    />
                  </div>

                  {/* Appointment Info */}
                  <FormInput
                    label="Service Needed"
                    name="service"
                    type="select"
                    placeholder="Select a service"
                    options={serviceOptions}
                    error={errors.service?.message}
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                      label="Preferred Date"
                      name="preferredDate"
                      type="date"
                      error={errors.preferredDate?.message}
                      {...register('preferredDate', {
                        required: 'Please select a date',
                      })}
                    />
                    <FormInput
                      label="Preferred Time"
                      name="preferredTime"
                      type="select"
                      placeholder="Select time"
                      options={timeSlots}
                      error={errors.preferredTime?.message}
                      {...register('preferredTime', {
                        required: 'Please select a time',
                      })}
                    />
                  </div>

                  <FormInput
                    label="Additional Notes"
                    name="notes"
                    type="textarea"
                    placeholder="Any special requirements or concerns..."
                    rows={3}
                    {...register('notes')}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      icon={Send}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
