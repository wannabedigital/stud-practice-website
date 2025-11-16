import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json(); // ожидаем { name, phone, message }

    const bitrixWebhookUrl = `${process.env.BITRIX_WEBHOOK_URL}crm.lead.add.json`;

    const body = {
      fields: {
        TITLE: `Новая заявка с сайта: ${data.name}`,
        NAME: data.name,
        PHONE: [{ VALUE: data.phone, VALUE_TYPE: 'WORK' }],
        COMMENTS: data.message,
      },
      params: { REGISTER_SONET_EVENT: 'Y' },
    };

    const res = await fetch(bitrixWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error_description },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.result });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
