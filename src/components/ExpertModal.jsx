import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useExpertModal } from '../contexts/ModalContext';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  organization: '',
};

const ExpertModal = () => {
  const { isOpen, closeModal } = useExpertModal();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setFormData(initialFormState);
        setErrors({});
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{7,15}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      newErrors.mobile = 'Enter a valid mobile number';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: connect this to your backend / email service later.
    console.log('Expert request submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>

      <div className="relative w-full max-w-sm bg-card border border-borderLight p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-textSecondary hover:text-accent"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-textPrimary mb-4">Talk to an IAM Expert</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="block text-sm text-textSecondary mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm"
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              <div className="mb-3">
                <label className="block text-sm text-textSecondary mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm"
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>

              <div className="mb-3">
                <label className="block text-sm text-textSecondary mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="mb-3">
                <label className="block text-sm text-textSecondary mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm"
                />
                {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-textSecondary mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm"
                />
                {errors.organization && <p className="text-xs text-red-500 mt-1">{errors.organization}</p>}
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-6">
            <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-bold text-textPrimary mb-2">
              Thank you for choosing us
            </h3>
            <p className="text-sm text-textSecondary mb-6">
              Your request has been processed. One of our IAM experts will reach out soon.
            </p>
            <button onClick={closeModal} className="btn-secondary">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertModal;