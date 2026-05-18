import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Dashboard: "Dashboard",
                Issues: "Issues",
                Description: "Description",
                Status: "Status",
                Priority: "Priority",
                PriorityDescription: "Choose how important this issue is.",
                Created: "Created",
                Updated: "Updated",
                Selected: "State",
                Open: "Open",
                In_Progress: "In Progress",
                Closed: "Closed",
                In_Review: "In Review",
                Backlog: "Backlog",
                All: "All",
                New: "New issue",
                Describe: "Describe the issue...",
                DescriptionTitle: "Short and clear issue summary",
                EnterTitle: "Enter your issue title",
                Title: "Title",
                Create: "Create",
                Back: "Back",
                ErrorCreate: "The title or description is not filled in.",
                CreatedTask: "The task has been created",
                IssueNotFound: "Issue not found",
                NoIssuesFound: "No issues found",
                LOW: "Low",
                MEDIUM: "Medium",
                HIGH: "High",
                URGENT: "Urgent",
            }
        },
        ru: {
            translation: {
                Dashboard: "Дашборд",
                Issues: "Задачи",
                Description: "Описание",
                Status: "Статус",
                Priority: "Приоритет",
                PriorityDescription: "Выберите важность задачи.",
                Created: "Создано",
                Updated: "Обновлено",
                Selected: "Статус",
                Open: "Открыто",
                In_Progress: "В работе",
                Closed: "Закрыто",
                In_Review: "На проверке",
                Backlog: "Бэклог",
                All: "Все",
                New: "Новая задача",
                Describe: "Опишите проблему...",
                DescriptionTitle: "Краткое и понятное описание проблемы",
                EnterTitle: "Введите заголовок задачи",
                Title: "Заголовок",
                Create: "Создать",
                Back: "Назад",
                ErrorCreate: "Не заполнен заголовок или описание.",
                CreatedTask: "Задача создана",
                IssueNotFound: "Задача не найдена",
                NoIssuesFound: "Задачи не найдены",
                LOW: "Низкий",
                MEDIUM: "Средний",
                HIGH: "Высокий",
                URGENT: "Срочный",
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
