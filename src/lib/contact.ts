export interface ContactPayload {
  sender_name?: string;
  sender_email: string;
  phone_number?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const CONTACT_API_ENDPOINT =
  "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/contact?projectId=6e9cb488-e7c8-40bf-96d4-569493da8d40";

export async function sendContactInquiry(
  data: ContactPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    const phoneVal = data.phone_number?.trim() || data.phone?.trim() || undefined;

    const payload: Record<string, string | undefined> = {
      sender_name: data.sender_name?.trim() || undefined,
      sender_email: data.sender_email.trim(),
      phone: phoneVal,
      subject: data.subject?.trim() || undefined,
      message: data.message.trim(),
    };

    const response = await fetch(CONTACT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => null);
      console.warn("Contact API returned status:", response.status, errorJson);
      return {
        success: false,
        message: errorJson?.error || "Submission failed.",
      };
    }

    const resJson = await response.json().catch(() => ({ success: true }));
    return {
      success: true,
      message: resJson?.message || "Inquiry sent successfully.",
    };
  } catch (error) {
    console.error("Network error submitting to contact endpoint:", error);
    return {
      success: false,
      message: "Network error occurred. Please try again.",
    };
  }
}
