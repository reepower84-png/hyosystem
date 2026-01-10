interface DiscordWebhookPayload {
  name: string;
  phone: string;
  message: string;
}

export async function sendDiscordNotification(data: DiscordWebhookPayload): Promise<boolean> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL is not configured');
    return false;
  }

  const embed = {
    title: '🔔 새로운 문의가 접수되었습니다!',
    color: 0x3b82f6,
    fields: [
      {
        name: '👤 이름',
        value: data.name,
        inline: true,
      },
      {
        name: '📞 연락처',
        value: data.phone,
        inline: true,
      },
      {
        name: '💬 문의 내용',
        value: data.message || '(내용 없음)',
        inline: false,
      },
    ],
    footer: {
      text: '효시스템 문의 알림',
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: '효시스템 알림봇',
        embeds: [embed],
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    return false;
  }
}
