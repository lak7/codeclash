import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Triangle, Circle, Square, Users, Laptop, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    college: "",
    teamSize: "",
    experience: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({
          name: "",
          email: "",
          college: "",
          teamSize: "",
          experience: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="register" className="w-full py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
      <div className="absolute right-10 top-10 opacity-20 md:opacity-30">
        <Triangle className="h-16 w-16 text-pink-500/30" strokeWidth={1} />
      </div>
      <div className="absolute left-10 bottom-10 opacity-20 md:opacity-30">
        <Circle className="h-16 w-16 text-pink-500/30" strokeWidth={1} />
      </div>
      <div className="absolute right-1/4 bottom-1/4 opacity-20 md:opacity-30">
        <Square className="h-16 w-16 text-pink-500/30" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-white">JOIN THE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              {" "}
              CHALLENGE
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Registration will open soon. Be the first to know when we launch by
            filling out the interest form below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-md border border-pink-500/20 rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-white flex items-center gap-2"
                >
                  <Users className="h-4 w-4 text-pink-500" />
                  <span>Your Name</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-black/50 border-pink-500/20 focus:border-pink-500 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-white flex items-center gap-2"
                >
                  <Triangle className="h-4 w-4 text-pink-500" />
                  <span>Email Address</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  className="bg-black/50 border-pink-500/20 focus:border-pink-500 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="college"
                  className="text-white flex items-center gap-2"
                >
                  <Square className="h-4 w-4 text-pink-500" />
                  <span>College/Organization</span>
                </label>
                <Input
                  id="college"
                  name="college"
                  value={formState.college}
                  onChange={handleChange}
                  placeholder="Your institution"
                  className="bg-black/50 border-pink-500/20 focus:border-pink-500 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="teamSize"
                  className="text-white flex items-center gap-2"
                >
                  <Laptop className="h-4 w-4 text-pink-500" />
                  <span>Team Size</span>
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formState.teamSize}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 bg-black/50 border border-pink-500/20 focus:border-pink-500 text-white rounded-md"
                  required
                >
                  <option value="" disabled>
                    Select team size
                  </option>
                  <option value="1">Solo (1 member)</option>
                  <option value="2">2 members</option>
                  <option value="3">3 members</option>
                  <option value="4">4 members</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="experience"
                  className="text-white flex items-center gap-2"
                >
                  <Star className="h-4 w-4 text-pink-500" />
                  <span>Coding Experience</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formState.experience}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 bg-black/50 border border-pink-500/20 focus:border-pink-500 text-white rounded-md"
                  required
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full md:w-auto px-10 py-6 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold text-lg rounded-md relative overflow-hidden ${
                  isSuccess ? "bg-green-500" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Interest Registered!
                  </span>
                ) : (
                  <span>Register Interest</span>
                )}

                {/* Button light effect */}
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-md"
                  animate={{ scale: [1, 1.05, 1], opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </div>
          </form>
        </div>

        <div className="text-center mt-10 text-gray-500">
          <p>Full registration will open soon. Stay tuned for more details!</p>
        </div>
      </div>
    </section>
  );
}
